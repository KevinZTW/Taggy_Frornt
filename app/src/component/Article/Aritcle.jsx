import { useLocation } from "react-router-dom";
import MD from "./MD";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, checkFirebaseUserStatus } from "../../firebase.js";
import ArrowBack from "@material-ui/icons/ArrowBack";
import "../../css/Article.css";

export default function Article() {
  let [article, setArticle] = useState({});
  const location = useLocation();
  let search = location.search;
  let params = new URLSearchParams(search);
  let id = params.get("id");

  useEffect(() => {
    function getArticles() {
      db.collection("Articles")
        .doc(id)
        .get()
        .then(function (doc) {
          setArticle({
            title: doc.data().title,
            content: doc.data().content,
          });
        });
    }
    getArticles();
  }, []);
  checkFirebaseUserStatus();
  return (
    <div>
      <div className="head">
        <Link to={"/board"}>
          <ArrowBack style={{ color: "#FFFCEC" }} />
        </Link>
      </div>
      <div className="title">{article.title}</div>
      <MD content={article.content} id={id} />
    </div>
  );
}
