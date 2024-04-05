import { TypeAnimation } from "react-type-animation"


const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 18, 2023',
        datetime: '2023-03-18',
        category: { title: 'Marketing', },
        author: {
            name: 'Nicholas Badea',
            role: 'Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Baga degetul in p***a',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Oct 5, 2023',
        datetime: '2023-10-5',
        category: { title: 'Marketing' },
        author: {
            name: 'Nicholas Badea',
            role: 'Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Baga p*** in *****',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Jan 16, 2024',
        datetime: '2024-01-16',
        category: { title: 'Marketing' },
        author: {
            name: 'Nicholas Badea',
            role: 'Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

]

export default function Blog() {
    return (
        <div className="bg-white py-16 sm:py-24 px-4 relative ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl lg:mx-0 ">


                    <h2 className="text-3xl font-bold tracking-tight sm:h-16 sm:text-5xl bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent">
                        <TypeAnimation
                            sequence={[

                                'From', //  Continuing previous Text
                                500,
                                'From the',
                                500,
                                'From the blog',
                                500,

                            ]}

                            repeat={Infinity}
                        />
                    </h2>

                </div>

                <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-fuchsia-500 pt-8 sm:mt-4  lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <p

                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </p>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <p >
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </p>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <p >
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </p>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>




            </div>

            <div className=" w-full flex flex-col justify-center items-center xl:flex-row gap-5 py-5 px-5 rounded-lg mt-20 sm:mt-32 bg-gradient-to-b from-slate-900 to-slate-600">
                <p className=" text-xl text-white text-center">
                    Learn how to grow your business with our expert advice.
                </p>

                <button className="text-white max-w-[250px] z-50  bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:bg-gradient-to-l hover:from-fuchsia-600 hover:to-yellow-500 w-full ease-in-out duration-300 rounded-full py-1.5 px-5 text-center text-md">Check our blog</button>

            </div>
        </div>
    )
}
