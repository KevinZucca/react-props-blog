import JsonPosts from '../../posts.json';

export default function TagsList() {
  const tags = [];
  JsonPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  return (
    <ul className="flex h-['80px'] w-full justify-center gap-3 bg-gray-200 py-4 capitalize text-black">
      {tags.map((tag, index) => (
        <li key={index}>
          <strong>{tag}</strong>
        </li>
      ))}
    </ul>
  );
}
