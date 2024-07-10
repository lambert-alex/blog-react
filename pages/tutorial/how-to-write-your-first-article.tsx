/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import YouTube from 'react-youtube';

const Article = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Demo Article.
                </Text>

                <Text p>
                    An embedded youtube video.
                </Text>
                <YouTube videoId="duW9YWQz1fI"/>
            </div>
        </PageLayout>
    )
}

export default Article