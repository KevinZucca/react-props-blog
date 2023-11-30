export default function Post({
  id,
  title,
  image,
  content,
  tags,
  published = 'false',
}) {
  const colors = {
    modern: 'bg-blue-500',
    art: 'bg-red-400',
    design: 'bg-yellow-300',
    furniture: 'bg-pink-500',
    decor: 'bg-green-500',
    home: 'bg-purple-500',
    lighting: 'bg-orange-200',
    sculpture: 'bg-purple-200',
    industrial: 'bg-blue-200',
    rustic: 'bg-brown-500',
    scandinavian: 'bg-azure-500',
    vase: 'bg-gray-300',
  };

  return (
    <>
      <div
        className={`aspect-h-1 aspect-w-1 lg:aspect-none h-60 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 `}
      >
        <img
          src={image}
          alt={`Front of ${title} in black.`}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{content}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={Date.now()}
                className={`mt-1 rounded-full border p-2 px-2 text-center text-sm text-gray-700 ${colors[tag]}`}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
