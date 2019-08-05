window.onload = function() {
		const faceElement = document.querySelector("p");
		const moods = [{face: "ヽ(ヅ)ノ", color: "blue"},
									 {face: '⊙︿⊙', color: "yellow"},
									 {face: '(ಠ⌣ಠ)', color: "red"},
									 {face: '(⊙＿⊙)', color: "orange"}];
									 
		function randomMood(moods) {
			return moods[(Math.floor(Math.random() * moods.length))];
		}
  
    document.querySelector("#happy")
        .addEventListener("click", function () {
          store.dispatch({ type: "HAPPY",
                           payload: moods[0] });
         
    });
  
    document.querySelector("#sad")
        .addEventListener("click", function () {
					store.dispatch({ type: "SAD",
													payload: moods[1] });

    });

    document.querySelector("#angry")
        .addEventListener("click", function () {
					store.dispatch({ type: "ANGRY",
													 payload: moods[2]
						 });

    });

    document.querySelector("#confused")
        .addEventListener("click", function () {
					store.dispatch({ type: "CONFUSED",
													 payload: moods[3] });
		});

		document.querySelector("#random")
        .addEventListener("click", function () {
					store.dispatch({ type: "RANDOM",
													 payload: randomMood(moods) });
		});

		store.subscribe(() => {
			const currentFace = store.getState();
			faceElement.innerText = currentFace.face;

			document.querySelector("#face").style.backgroundColor = currentFace.color;
		});
  }
  