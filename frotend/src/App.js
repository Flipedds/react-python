import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
function App() {

  const [articles, setArticles] = useState([])
  const [editedArticle, setEditedArticle] = useState(null)
  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
    'method':'GET',
    headers: {
      'Content-Type':'aplication/json'
    }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  },[])

  const editArticle = (article) => {
        setEditedArticle(article)
  }


  return (
    <div className="App">
      <h1>Flask python e ReactJs</h1>
      <ArticleList articles = {articles} editArticle = {editArticle}/>
    
    {editedArticle ? <Form article = {editedArticle}/> : null}
    
    
    </div>
  );
}

export default App;
