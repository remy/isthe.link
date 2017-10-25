import Layout from '../components/Layout';
import Project from '../components/Project';
import projects from '../projects';

export default () => (
  <Layout>{projects.map((p, i) => <Project key={i} {...p} />)}</Layout>
);
