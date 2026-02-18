import './style.css';
import { renderContent } from "./render-content";

fetch('/content.json')
  .then(response => response.text())
  .then(text => {
    const json = JSON.parse(text);
    renderContent(json);
});