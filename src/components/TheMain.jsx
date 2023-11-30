import postsList from '../../posts.json';
import Article from './Article';
import Post from './Post';
import TagsList from './TagsList';

export default function TheMain() {
  return (
    <main className="border">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-20 sm:px-6 lg:max-w-7xl lg:px-8">
          <TagsList />
          <Article />
          <div className="mt-6 grid grid-cols-1 gap-y-10 overflow-hidden sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {postsList.length > 0 ? (
              postsList.map((post, i) => (
                <div
                  key={i}
                  className={`group relative ${
                    post.published === false && 'hidden'
                  }`}
                >
                  <Post
                    id={post.id}
                    title={post.title}
                    image={post.image}
                    content={post.content}
                    tags={post.tags}
                    published={post.published}
                  ></Post>
                </div>
              ))
            ) : (
              <h2>No posts available</h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
