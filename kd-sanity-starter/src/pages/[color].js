import { createClient } from 'next-sanity';
import { useEffect, useState } from 'react';
import colors from '../data/colors.json';

const client = createClient({
  projectId: 'gjsw9ksp',
  dataset: 'production',
  apiVersion: '2024-03-25',
  useCdn: false,
});

export default function Color({ color }) {
  const [loadedColors, setLoadedColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const colors2 = await client.fetch(`*[_type == "color"]`);
      setLoadedColors(colors2);
      console.log(colors2);
    };

    fetchData();
  }, []);

  return (
    <div className='color-page' style={{ backgroundColor: color.hex }}>
      <h1>{color.name}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = colors2.map((color) => {
    return {
      params: { color: color.name },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // that find is only going to find the first item that matches the condition
  const color = colors.find((color) => color.name === params.color);
  return { props: { color } };
}
