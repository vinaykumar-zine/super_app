import React, {useState} from "react";
import actionBG from "../../assets/actionBG.png"
import styles from "./GenrePage.Module.css"


function GenrePage() {

	const [genres, setGenres] = useState([
		{
			title: "Action",
			bgInage: actionBG

		},
		{
			title: "Drama",
			bgInage: ""
		}, 
		{
			title: "Romance",
			bgInage: ""
		},
		{
			title: "Western",
			bgInage: ""
		},
		{
			title: "Horro",
			bgInage: ""
		},
		{
			title: "Fantasy",
			bgInage: ""
		},
		{
			title: "Music",
			bgInage: ""
		},
		{
			title: "Fiction",
			bgInage: ""
		}
	]);
	const [selectedGenre, setSelectedGenre] = useState([0, 3, 5]);

	const removeGenre = (index) => {
		console.log(index);
		// const newGenre = selectedGenre.filter((item) => item !== index); 
		setSelectedGenre([...selectedGenre.filter((item) => item !== index)]);
	};

	return (
		<div className={styles.page}>
			<div className={styles.left}>
				<h2>Super App</h2>
				<h3>Chooose your Entertainment category</h3>
				<div className={styles.selected}>
					{
						selectedGenre.map((item) => (
							<div key={item} className={styles.selectedGenre}>
								{genres[item].title}
								<img src={genres[item].bgInage} alt="background Image" />
								<button onClick={() => removeGenre(item)}>x</button>
							</div>
						))
					}
				</div>
			</div>
			<div className={styles.right}></div>
		</div>
	);
}

export default GenrePage;