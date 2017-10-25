export default function Project({ id, description, repo = false }) {
  return (
    <div className="Project">
      <h2 className="title" id={id}>
        <a href={`#${id}`}>{id}</a>
      </h2>
      <p>{description}</p>
      <p>
        <a
          className="link"
          href={`https://${id}.isthe.link`}
        >{`${id}.isthe.link`}</a>
        {repo && (
          <span className="source">
            &nbsp;//&nbsp;<a href={`https://github.com/${repo}`}>source</a>
          </span>
        )}
      </p>
      <img src={`static/img/${id}.png`} />
    </div>
  );
}
