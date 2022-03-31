import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          temporibus, consequatur nihil laudantium dolore libero praesentium
          nemo optio quisquam quae!
        </p>
        <p>
          <Link to="/">back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
