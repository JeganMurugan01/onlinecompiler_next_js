const Table = () => {
  return (
    <>
      <div classNameName='relative overflow-x-auto shadow-md sm:rounded-lg '>
        <table className=' text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Product name
              </th>
              <th scope='col' className='px-6 py-3'>
                Color
              </th>
              <th scope='col' className='px-6 py-3'>
                Category
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
          
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Microsoft Surface Pro
              </th>
              <td className='px-6 py-4'>White</td>
              <td className='px-6 py-4'>Laptop PC</td>
              <td className='px-6 py-4'>$1999</td>
              <td className='px-6 py-4 text-right'>
                <a
                  href='#'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit
                </a>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
