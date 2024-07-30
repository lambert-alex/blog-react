/**These are necessary imports / components for the page */
import { PageLayout } from "../../src/components";
import YouTube from 'react-youtube';
import CommentForm from "../../src/components/CommentComponents/CommentSection";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            {/* Replace the below content with your content */}
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
            While trying to come up with a topic to hit all of the blog talking points for this week, I realized that another class I have taken fits perfectly into this week’s topic. The class is CSC 370 taught by Sean Chester. CSC 370 was a remote class that has weekly sessions that are held live over zoom and were recorded. Like EDCI339 being remote has made the class way more accessible to students for a variety of reasons. For example, many students who could not afford to live in Victoria BC year-round are now able to attend classes in the summer while living at home and could get their degree faster for a lower cost. While this is a technology change that has been available since the late 2000s it is really been a culture change driven by COVID-19 that has made this advancement in the last 5 years possible. This like so many other classes has made education so much more accessible and inclusive.<br/>
            <br/>
            Another thing about CSC 370 that is taught by Sean Chester that made it more accessible is it is all available for free for anyone who has an internet connection on GitHub the assignments can be done and graded by anyone with a free GitHub account. This open learning principle which was really driven by MIT in the early 2000s has been adopted more wildly by educators and in my opinion is one of the largest drivers of distributed learning in the past 20 years.<br/>
            <br/>
            <a target="_blank" rel="noopener noreferrer" className="block md:w-[100%] w-[90%] ">
                Graph of CSC 370 connectivism<br/><br/><img src="/images/graph.png" alt="csc370 graph" className="rounded-lg overflow-hidden" />
            </a>
            Connectivism was one of the key educational theories underpinning CSC 370 and it was executed well. Students could go to live lectures over zoom. Students could access recordings of the lectures later if they couldn’t make it. All the assignments came with automated tests so students could see how they were going to do on the assignment as they worked on them. There were 5-minute online quizzes which constantly checked your learning. It was a well-executed course that followed the principles of connectivism. <br/>
            <br/>
            Not everything was peachy. The biggest downside of CSC 370 and every online course that I have taken, especially the asynchronous ones are the lack of personal connections. I have struggles to make meaningful connections with other students in online classes which leads me to disengage with the material. This not only affects students but the educators as well. There is one professor I had for three back-to-back classes during the 2020-2021 COVID classes. I would be the only person with my camera on during the zoom lectures out of almost 200 students. After each class I got an email from the professor thanking me for having my camera on. I have never taught a class however I suspect professors struggle with similar disengagement issues when teaching classes online. I suspect this issue will become worse as Large Language Models become more prevalent throughout education.<br/>
            <br/>
            <a target="_blank" rel="noopener noreferrer" className="block md:w-[100%] w-[90%] " href="https://github.com/sean-chester/relational-databases">
                <img src="/images/csc370.png" alt="csc370 github page" className="rounded-lg overflow-hidden" />Sean Chesters CSC 370 github.<br/><br/>
            </a>
                For me, the CSC 370 class I took was the peak of distributed learning. We used opensource tools that were created by the community. Everything was delivered asynchronously. There were quizzes, videos, books and code to read about the subject. We could grade our own assignments. This is a lot harder than it sounds. I hope you had as much fun reading this as I had writing it! <br/>
            <br/>
                <p className="font-bold">Small Note:</p>
                I looked for the videos that were made available for the CSC 370 class that I took, and they are no longer available. This highlights one issue with distributed learning; the resources can disappear at any time. However, I was able to find another UVIC professor Bill Birds video lecture on the subject. Truly one of the great UVIC professors.<br/>
            <br/>
                <YouTube videoId="4CFuTsoicME"/>
            </div>
            {/* Replace the above content with your content */}
            <CommentForm blog_id={1}/>
        </PageLayout>
    )
}

export default Article;