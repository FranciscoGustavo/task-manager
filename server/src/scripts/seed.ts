import connectDatabase from '../lib/sequelize';
import { Task } from '../models';

const TASK_TITLE = 'Tarea numero';
const TASK_DESCRIPTION =
  'It is a long established fact that a reader will be distracted.';

const getCreatedDate = () => {
  const day = Math.floor(Math.random() * 29) + 1;
  const dayOnMiliseconds = day * 24 * 60 * 60 * 1000;
  const readyDate = Date.now() - dayOnMiliseconds;
  const ISODate = new Date(readyDate).toISOString();
  return ISODate;
};

const getTimer = () => {
  const time = Math.floor(Math.random() * 119) + 1;
  return time;
};

type Main = (size?: number) => void;
const main: Main = async (size = 50) => {
  const fakeData = new Array(size).fill(null).map((_, idx) => {
    const date = getCreatedDate();
    return {
      title: `TASK_TITLE ${idx + 1}`,
      description: TASK_DESCRIPTION,
      timer: getTimer(),
      tag: 'to do',
      started: 1,
      finished: 1,
      createdAt: date,
      updatedAt: date,
    };
  });

  await connectDatabase();

  Promise.all(fakeData.map((data) => Task.create(data)))
    .then()
    .catch((err) => {
      console.log(err);
    });

  console.log(fakeData);
};

main(50);
