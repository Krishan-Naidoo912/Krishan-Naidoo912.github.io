import React from 'react'
import Card from './Card.js'

const CardList = ( {Robots} ) => {
	return (
		<div>
			{
				Robots.map((user,index) => {
					return <Card
							key={index}
							id={Robots[index].id}
							name={Robots[index].name}
							username={Robots[index].username}
							email={Robots[index].email}
							/>
					}
				)
			}
		</div>)
} 

export default CardList; 

// This is the same as the map function above
//	return (
//		<div>
//			<Card id={Robots[0].id} name={Robots[0].name} username={Robots[0].username} email={Robots[0].email} />
//			<Card id={Robots[1].id} name={Robots[1].name} username={Robots[1].username} email={Robots[1].email} />
//			<Card id={Robots[2].id} name={Robots[2].name} username={Robots[2].username} email={Robots[2].email} />
//			<Card id={Robots[3].id} name={Robots[3].name} username={Robots[3].username} email={Robots[3].email} />
//			<Card id={Robots[4].id} name={Robots[4].name} username={Robots[4].username} email={Robots[4].email} />
//			<Card id={Robots[5].id} name={Robots[5].name} username={Robots[5].username} email={Robots[5].email} />
//			<Card id={Robots[6].id} name={Robots[6].name} username={Robots[6].username} email={Robots[6].email} />
//			<Card id={Robots[7].id} name={Robots[7].name} username={Robots[7].username} email={Robots[7].email} />
//			<Card id={Robots[8].id} name={Robots[8].name} username={Robots[8].username} email={Robots[8].email} />
//			<Card id={Robots[9].id} name={Robots[9].name} username={Robots[9].username} email={Robots[9].email} />
//		</div>
//	);