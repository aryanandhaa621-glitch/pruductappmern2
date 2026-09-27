import React from 'react'

const Add = () => {
  return (
    <div class="flex flex-col items-center p-10 space-y-4">
        <h3>add page</h3>
        <input class='rounded outline p-2'  type="text" placeholder='Product name'  />
        <input class='rounded outline p-2'  type="text" placeholder='Product price'  />
        <input class='rounded outline p-2'  type="text" placeholder='Product img link'  />
        <input class='rounded outline p-2'  type="text" placeholder='Product disc'  />
        <button class="bg-blue-600 text-white py-2 mt-3 p-3 rounded hover:bg-green-700">
            add product
        </button>
    </div>

  )
}

export default Add