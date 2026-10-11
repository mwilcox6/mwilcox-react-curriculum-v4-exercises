//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Morgan Wilcox';
  const age = 30;
  const hobbies = ['doing nails', 'watching TV', 'trying new restaurants'];

  return (
    <div>
      {<h1> {name} </h1>}
      <p>
        {' '}
        Hi There! My name is {name}. I am {age} and I live in Fort Lauderdale,
        Florida. I recently completed the Code the Dream Intro to Javascript
        Bascis Course and I'm excited about this React JS course. Outside of
        learning to code, I enjoy the following things:{' '}
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>
    </div>
  );
}
