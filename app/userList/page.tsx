import Table from '../components/Tabel';
import { globalValue } from '../constants';
const users = () => {
  async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const repo = await res.json();
    console.log(repo, 'repo ');
  };
  return (
    <>
      <p className='text-3xl p-5'>{globalValue?.userPageLabel?.userList}</p>
      <Table />
    </>
  );
};

export default users;
