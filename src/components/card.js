import { html } from "../dom_utils";
import './card.css'

export function card({title, description, authors, urls}){


    return html(`<div class="card">
    <div class="content">
      <div class="back">
        <div class="back-content">
          <strong>${title}</strong>
        </div>
      </div>
      <div class="front">
        
        <div class="img">
          <div class="circle">
          </div>
          <div class="circle" id="right">
          </div>
          <div class="circle" id="bottom">
          </div>
        </div>
  
        <div class="front-content">
          <small class="badge">${title}</small>
          <div class="description">
            <div class="title">
              ${urls}
            </div>
            <p class="card-footer">
              ${authors}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`)


}