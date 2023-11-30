import postsList from '../../posts.json';
import Article from './Article';

export default function TheMain() {
    return (
        <main className="border">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <Article /> 

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 gap-y-10 overflow-hidden">
                        {postsList.map((post, i) => (
                            <div key={i} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-60">
                                    <img src={post.img} alt={`Front of ${post.title} in black.`} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{post.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </main>
    );
}
