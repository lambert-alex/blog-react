/**These are necessary imports / components for the page */
import { PageLayout } from "../../src/components";
import CommentForm from "../../src/components/CommentComponents/CommentSection";
import { useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Article = () => {
    const [displayTranscript, setTranscript] = useState(false);
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            {/* Replace the below content with your content */}
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
            Though out my own educational background I have been exposed to online learning at various stages of my life. One thing I have noticed about how communities in general have grown and changed with technology is the idea of how one presents themselves in their community. In the early days digital communities were bastions of anonymity for better and for worse. However today most people are highly aware of how they present themselves online might come back years or even decades later and that freedom of expression that is so valuable in education is lost.<br/>
            <br/>
            In the spirit of this notion and as a personal experience I created the short audio clip below to speak more to this.<br/>
            <br/>
            <AudioPlayer autoPlay={false} onPlay={e => console.log("on play")} src="/audio/Recording.m4a" />
            <br/>
            { displayTranscript ? 
            (<div className="border rounded px-2 py-2 dark:bg-slate-700 bg-blue-400">
                <button className="my-2 py-2 px-4 mx-w-fit border rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white font-semibold" onClick={() => setTranscript(false)}>Hide Transcript</button>
                <br/>
                    “I want to expand on my point above and I am using this audio clip as an illustrative example. I considered making a video recording of myself for this blog and I might have if my blog was on a closed network restricted to this class I instead am choosing to record this audio. While I have near 100% confident that no one outside of this class is going to stumble on this blog I am almost certain that some bot will scooping up data for generative AI training. There is now a strange, implied consent to posting publicly online that my voice is going to be used to train some google AI, and that has affected how I interacted with this class, the digital community has changed and thus my identity in this class has changed as well”<br/>
                <br/>
            </div>) : (<button className="my-2 py-2 px-4 mx-w-fit border rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white font-semibold" onClick={() => setTranscript(true)}> See Transcript</button>)
            }
            <br/>
            This isn’t to say that these changes are all bad, however I do think that is something an instructor has to consider when creating a distributed learning environment. What do you think? I made a quick quiz to see what the people reading this blog think (if you complete it you can see what they think as well).<br/>
            <br/>
            <div className="mx-2 my-2 object-fill">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfv8zvG1gFY2bO6I1JHQf7Ecpt_FkuaPW4yj2VVkWpFuzDPdA/viewform?embedded=true" width="640" height="489">Loading…</iframe>
            </div>
            <br/>
            I don’t want to say that public spaces are bad things. The perfect example of this is when we look at the different digital tools & platforms that have helped my learning. Personally, I have used leetcode more than I ever have wanted to but what kept me coming back over and over is the amazing community who has a million and one answers and explanations to every single problem. However, leetcode was soon overshadowed for me by neetcode. Neetcode is much smaller and does not have the community interactions available that leetcode does, but it does have an amazing instructor. The only interactions I have ever had with the instructor over video but those interactions he fosters are so much more high quality my learning has increased and my excitement over the material is much higher.<br/>
            <br/>
            The way the neetcode creator does this is he creates a can-do attitude towards the problems, where I feel like I just need to put in the work and I to can figure out the problems like he can. Contrasted with leetcode where the answers are there everyone is written by people in the community most of whom are trying to show how smart they are, this can lead to rather discouraging feelings when trying to learn how to answer a question.<br/>
            <br/>
            This brings up the idea of instructor presence in the classroom while in the end the neetcode instructor didn’t provide anymore information than the community did in leetcode. In fact, it is less information. What he did do was present it quickly, friendly and effectively. I think that is the biggest expectation from distributed learning instructors is the clean presentation of their teaching materials. The expectation of online distributed classrooms vs in person classrooms is the same expectations of movies vs live theater; in a movie you don’t want to see a coffee cup slip on to stage but in live theater… well mistakes happen. There is very little forgiveness when you have “time to prepare”.<br/>
            <br/>
            I hope this was a good read for everyone please leave me a comment below if you have any suggestions or thoughts!<br/>
            <br/>
            </div>
            {/* Replace the above content with your content */}
            <CommentForm blog_id={2}/>
        </PageLayout>
    )
}

export default Article;