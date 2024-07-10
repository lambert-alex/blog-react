/**These are necessary imports / components for the page */
import { ListType } from "../src/shared/enums";
import { PageLayout, Text, List, LinkTo, Seperator } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About This Blog',
        description: `Hi I am Alex. This is my blog for UVIC's EDCI339 class.`,
        keywords: 'next js blog template',
        author: 'ALEX'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/hiking.jpeg" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Hi I am Alex.
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        This is a blog for EDCI 339 a class run by the faculty of education at UVIC.
                    </Text>

                    <Text p className='text-lg'>
                        This blog is made with <a href="https://react.dev/" className="underline font-bold">React</a> a free open-source JavaScript library. The code for the basic template of this blog
                        was modified from of an open-source template that can be found <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" className="underline font-bold">here</a>.
                        If you wish to see the changes I made you can see my repo <a href="https://github.com/lambert-alex/blog-react" className="underline font-bold">here</a>.
                        <br/>This blog is hosted for free via <a href="https://pages.github.com/" className="underline font-bold">Github Pages</a>.
                    </Text>
                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                I am running this blog this way for a few different reasons:
                            </Text>
                            <List type={ListType.disc}>
                                <li>Wordpress has ignored several extreme exploits one of which affected a Wordpress site I built for a UVIC class called SENG321.</li>
                                <li>React is quicker to use. *If you know how.</li>
                                <li>Wordpress has lots of pay to play features.</li>
                                <li>Should be faster than Wordpress or any other CMS</li>
                                <li>For the challenge.</li>
                            </List>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Some of the Features in this blog
                            </Text>
                            <List type={ListType.disc}>
                                <li>Light and Dark theme</li>
                                <li>Privacy Policy, Terms and Conditions page template</li>
                                <li>SEO metadata, Open Graph tags with Next SEO</li>
                            </List>
                        </div>

                    </div>
                    <Seperator />
                    <Text subtitle className='text-3xl font-medium'>
                        License
                    </Text>
                    <Text p className='text-lg'>
                        Licensed under the MIT License, Copyright © {CURRENT_YEAR}
                    </Text>
                    <Text p className='text-lg'>
                        This is an open source project everyone is welcome to contribute. Feel free to open an issue, if you have any questions or incase you find a bug..
                    </Text>
                    <Seperator />
                    <Text p className='text-lg'>
                        Modified by Alex.
                    </Text>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs