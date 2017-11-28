export default function Project({ id, description, repo = false }) {
  const url = `${id}.isthe.link`;
  return (
    <div className="Project">
      <h2 className="title" id={id}>
        <a href={`#${id}`}>{id}</a>
      </h2>
      <p>{description}</p>
      <p>
        <a className="link" href={`https://${url}`}>
          {url}
        </a>
        {repo && (
          <span className="source">
            &nbsp;//&nbsp;<a href={`https://github.com/${repo}`}>source</a>
          </span>
        )}
      </p>
      <a href={`https://${url}`}>
        <img src={`static/img/${id}.png`} />
      </a>
    </div>
  );
}
