import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

// queryKey should be unique, and may contain multiple items in an array.
// queryFn this is the thing that is going to run to actually query our data. In our case we just want to retrun a promise.
// .then(() => [...POSTS]) just returning all our existing posts in a brand new array
const App = () => {
  const queryClient = useQueryClient()
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

 const newPostMutation = useMutation( {
  mutationFn: (title) => {wait(5000).then(() => 
  POSTS.push({id: crypto.randomUUID(), title })
  )
  },
  onSuccess: () => {
    queryClient.invalidateQueries(["posts"])
  }
})

  if (postQuery.isLoading) return <h1> Loading...</h1>;
  if (postQuery.isError) {
    return <pre> {JSON.stringify(postQuery.error)}</pre>;
  }

  return (
    <div>
      {postQuery.data.map(post => ( 
        <div key = {post.id}> {post.title} </div>
      ))}
      <button 
        disabled={newPostMutation.isLoading} 
        onClick={() => newPostMutation.mutate("New Post Is rendered using mutate")}
      >
        Add New
      </button>
    </div>
   
  );
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
