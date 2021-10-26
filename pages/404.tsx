import type { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div className="container">
      <h1>Oops!</h1>
      <div className="info">404 - page not found</div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: calc(100vh - 10rem);
        }
      `}</style>
    </div>
  );
};

export default NotFound;
