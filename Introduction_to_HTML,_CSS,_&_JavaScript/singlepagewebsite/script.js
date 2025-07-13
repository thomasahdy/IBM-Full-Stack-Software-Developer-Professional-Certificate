function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
    let container = document.getElementById("all_recommendations");
    if (container && recommendation.value.trim() !== "") {
      var col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${recommendation.value}</p>
            </blockquote>
          </div>
        </div>
      `;
      container.appendChild(col);
      recommendation.value = "";
      showPopup(true); // Make sure this line is NOT commented out
    }
  }
  
  function showPopup(bool) {
    document.getElementById('popup').style.visibility = bool ? 'visible' : 'hidden';
  }
  