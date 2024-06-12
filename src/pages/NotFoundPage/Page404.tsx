interface Page404Props {
  source: "florist" | "platform";
}

const Page404 = ({ source }: Page404Props) => {

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        {source === "florist"
          ? "Don't upset our florists."
          : "The page you are looking for does not exist."}
      </p>
    </div>
  );
};

export default Page404;
