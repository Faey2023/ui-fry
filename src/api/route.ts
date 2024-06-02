//get static props
export const getStaticProps = async () => {
  const res = await fetch("../Data/data.json");
  const data = await res.json();
  console.log(data);

  return {
    props: { data },
  };
};
