import Image from 'next/image';


export default function CartList() {
  return (
    <div>
        <div className="h-auto w-full  p-8">
          <h1 className="text-black text-4xl font-medium pb-8 pl-12 text-center sm:text-left">
            Your Shopping Cart
          </h1>

          <ul className="hidden sm:flex sm:justify-around sm:text-lg text-gray-600 border-b pb-4 mb-4">
            <li>Product</li>
            <li className='pl-44 '>Quantity</li>
            <li>Total</li>
          </ul>

          {/* Product 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-around bg-white rounded-lg shadow-md p-4 mb-6">
            <Image
              src="/images/Product one.png"
              alt="Product 1"
              width={1500}
              height={1500}
              className="rounded-md object-cover w-[292PX]  h-[134px]"
            />
        
            <div className="mt-4 sm:mt-0 text-center">
              <p>1</p>
            </div>
            <div className="mt-4 sm:mt-0 text-center font-semibold">
              £85
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-around bg-white rounded-lg shadow-md p-4 mb-6">
            <Image
              src="/images/Product Two.png"
              alt="Product 2"
              width={1500}
              height={1500}
              className="rounded-md object-cover w-[292PX]  h-[134px]"
            />
    
            <div className="mt-4 sm:mt-0 text-center">
              <p>1</p>
            </div>
            <div className="mt-4 sm:mt-0 text-center font-semibold">
              £125
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between sm:justify-end mt-8 pr-28 ">
            <p className="text-gray-600 text-lg">Subtotal</p>
            <p className="font-semibold text-lg">£210</p>
          </div>

          {/*Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-[#4E4D93] text-white py-2  px-6 mr-20  transition">
              Go to Checkout
            </button>
          </div>
        </div>
    </div>
  );
}
