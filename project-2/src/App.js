
import './App.css';

function App() {
 
  const handleFetching = async (url, setResp, setLoading) => {
    axios
      .get(url)
      .then((resp) => {
        setResp(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("house");
  const [submitSearch, setSubmitSearch] = useState(false);
  const url = `https://api.tvmaze.com/search/shows?q=${searchInput}`;

  useEffect(() => {
    handleFetching(url, setShows, setIsLoading);
    // const fetchShow = async () => {
    //   const response = await axios(
    //     `https://api.tvmaze.com/search/shows?q=${searchInput}}`
    //   );
    //   setShows(response.data);
    // };
    // fetchShow();
    return () => {
      setSubmitSearch(false);
    };
  }, [submitSearch]);
  console.log(submitSearch, "submitSearch");
  console.log(shows, "shows");

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
