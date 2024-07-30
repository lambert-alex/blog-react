// CommentForm.tsx
import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';

interface Comment {
  id: number;
  name: string;
  content: string;
  created_at: string;
  blog_id: number;
}

interface CommentForm {
  blog_id: number,
}

const CommentForm: React.FC<CommentForm> = ({blog_id}: CommentForm) => {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    let { data: comments, error } = await supabase.from('comments').select('*').eq('blog_id', blog_id).order('created_at', { ascending: false });
    if (error) console.error('Error fetching comments:', error);
    // @ts-ignore
    else setComments(comments || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from('comments').insert([{ name, content, blog_id }]);
    if (error) console.error('Error inserting comment:', error);
    else {
      setName('');
      setContent('');
      fetchComments();
    }
  };

  React.useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <form className="flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className='appearance-none block w-full bg-gray-900 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            type="text"
            placeholder='Write your name here...'
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Comment:</label>
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='Write your thoughts here...'
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Submit</button>
      </form>
      <div className="flex flex-col space-y-4">
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div className='w-full px-2 py-2 text-sm text-white-200 bg-white rounded-lg border border-white-300 dark:bg-gray-800 focus:ring-0' key={comment.id}>
            <p><strong>{comment.name}</strong>:</p>
            <p><small>Posted: {new Date(comment.created_at).toLocaleString()}</small></p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;
