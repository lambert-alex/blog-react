/**These are necessary imports / components for the page */
import { PageLayout, Seperator } from "../../src/components";
import CommentForm from "../../src/components/CommentComponents/CommentSection";
import { useState } from "react";


const Article = () => {
    const [displayTranscript, setTranscript] = useState(false);
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            {/* Replace the below content with your content */}
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
            I just noticed some of my comments are not appearing on other peoples blog posts so I made this post with a reference to them
            <Seperator/>    
            Reply to <a className="dark:text-blue-200 text-blue-800" href="https://aidenedci339.opened.ca/blog-post-2/#comment-4">Adien's Blog Post #2</a>.<br/>
            <br/>
            Great post I also talked about how remote learning makes university much more affordable, I think you made some great points in this aspect. I also really liked how you used khan academy as an example for multimedia they really are exceptional at leveraging the power of distributed learning.<br/>
            <br/>
            One of the things I like about how you formatted your blog was your direct and to the point formatting for the weeks questions. I have struggled with making my blogs into one narrative to answer all the questions. I think I will format mine similarly.<br/>
            <br/>
            One bit of constructive feedback is it would have been awesome to have some pictures with your blog to help connect the topics!<br/>
            <br/>
            <Seperator/>
            <br/> Reply to <a className="dark:text-blue-200 text-blue-800" href="https://edci339abbyashfield.opened.ca/blog-post-2/?unapproved=2&moderation-hash=eee6fe44d7ed4d62b5885c23f06d5977#comment-2">Abby's Blog Post #2</a>.<br/>
            <br/>
            Hi Abby great blog,<br/>
            <br/>
            I really like how you included quotes that were relevant to the topic of your post in your blog that really added a nice feel and broke up the pacing of your blog. I will definitely be poaching that technique and do the same in my next blog post<br/>
            <br/>    
            I like how you picked wikis as a big step forward in digital education tools. For me that is such a ubiquitous part of education that I just consider that as the default and I hadn’t really thought of a time before those existed.<br/>
            <br/>
            Great work!<br/>
            <br/>
            <Seperator />
            <br/> Reply to <a className="dark:text-blue-200 text-blue-800" href="https://avnikhepar.opened.ca/blog-post-2-open-learning/?unapproved=1&moderation-hash=6cdcadefa3212cbe67115a246d2478fe#comment-1">Abby's Blog Post #2</a>.<br/>
            <br/>
            Hi Avni!
            <br/>
            Your blog page looks nice and polished and I like the way that you embedded links referencing what you are talking about in your blog that gave good context to the topics you were referencing.<br/>
            <br/>
            Learning management systems really have revolutionized how we think about learning in the modern age and I liked insight you provided about this topic.<br/>
            <br/>
            One thing I would have liked to see on your blog is more multi media pictures relating to the topics you are talking about.<br/>
            <br/>
            Keep up the good work.<br/>
            <br/>
            </div>
            {/* Replace the above content with your content */}
            <CommentForm blog_id={2}/>
        </PageLayout>
    )
}

export default Article;