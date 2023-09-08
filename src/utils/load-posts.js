export const loadPosts = async () => {
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const [photos, posts] = await Promise.all([photosResponse, postsResponse]); //array de promessas

    const photosJson = await photos.json(); // converte pra json
    const postsJson = await posts.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });
    return postsAndPhotos
}