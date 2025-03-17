const Total = ({ total }) => (
  <p>
    <b>Number of exercises {total}</b>
  </p>
);

const Header = ({ courseName }) => <h1>{courseName}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.reduce(
          (total, part) => (total += part.exercises),
          0
        )}
      />
    </div>
  );
};

export default Course;
