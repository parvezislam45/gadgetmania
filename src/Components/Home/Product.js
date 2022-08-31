import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <div class="min-h-screen bg-black flex justify-center items-center py-20">
                <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                        <div class="container">
                            <div class="max-w-md w-96 shadow-lg rounded-xl p-6">
                                <div class="flex flex-col ">
                                    <div class="relative h-62 w-80 mb-3">
                                        <img src="https://images.unsplash.com/photo-1576103200868-2dd3eec3f333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Just a flower" class=" w-80 h-96  object-fill  rounded-2xl" />
                                    </div>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Name : Macbook Pro 2021</h1>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Price- $ 15500</h1>
                                    <div class="flex space-x-2 text-sm font-medium justify-center mt-3">
                                        <Link to='/macbook'> <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                            <span>Go to Inventory</span>
                                        </button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="max-w-md w-96 shadow-lg rounded-xl p-6">
                                <div class="flex flex-col ">
                                    <div class="relative h-62 w-80 mb-3">
                                        <img src="https://fdn.gsmarena.com/imgroot/news/21/09/microsoft-surface-pro-8-leak/popup/-x1024/gsmarena_008.jpg" alt="Just a flower" class=" w-80 h-96  object-fill  rounded-2xl" />
                                    </div>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Name : SurfaceBook Pro</h1>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Price- $ 23500</h1>
                                    <div class="flex space-x-2 text-sm font-medium justify-center mt-3">
                                        <Link to='/macbook'> <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                            <span>Go to Inventory</span>
                                        </button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="max-w-md w-96 shadow-lg rounded-xl p-6">
                                <div class="flex flex-col ">
                                    <div class="relative h-62 w-80 mb-3">
                                        <img src="https://media.wired.com/photos/5baeb229311c5c02a8607e44/1:1/w_1200,h_1200,c_limit/HP-Leather-FA.jpg" alt="Just a flower" class=" w-80 h-96  object-fill  rounded-2xl" />
                                    </div>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Name : HP Spactor1</h1>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Price- $ 10000</h1>
                                    <div class="flex space-x-2 text-sm font-medium justify-center mt-3">
                                        <Link to='/macbook'> <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                            <span>Go to Inventory</span>
                                        </button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="max-w-md w-96 shadow-lg rounded-xl p-6">
                                <div class="flex flex-col ">
                                    <div class="relative h-62 w-80 mb-3">
                                        <img src="https://cdn0.vox-cdn.com/hermano/verge/product/image/9869/akrales_220426_5143_0035.jpg" alt="Just a flower" class=" w-80 h-96  object-fill  rounded-2xl" />
                                    </div>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Name : Lenovo Yoga</h1>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Price- $ 2000</h1>
                                    <div class="flex space-x-2 text-sm font-medium justify-center mt-3">
                                        <Link to='/macbook'> <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                            <span>Go to Inventory</span>
                                        </button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="max-w-md w-96 shadow-lg rounded-xl p-6">
                                <div class="flex flex-col ">
                                    <div class="relative h-62 w-80 mb-3">
                                        <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-2019/img/HUAWEI-MateBook-X-Pro-Fingerprint-Unlock-on.jpg" alt="Just a flower" class=" w-80 h-96  object-fill  rounded-2xl" />
                                    </div>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Name : Huawei MateBook</h1>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Price- $ 1500</h1>
                                    <div class="flex space-x-2 text-sm font-medium justify-center mt-3">
                                        <Link to='/macbook'> <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                            <span>Go to Inventory</span>
                                        </button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="max-w-md w-96 shadow-lg rounded-xl p-6">
                                <div class="flex flex-col ">
                                    <div class="relative h-62 w-80 mb-3">
                                        <img src="https://www.cnet.com/a/img/resize/7684803666c219604ce848fd75a151f950706891/2022/08/26/3fb6f96e-0d8c-4154-b49f-dc72c76b1bba/asus-zenbook-s-13-oled-um5302-09.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="Just a flower" class=" w-80 h-96  object-fill  rounded-2xl" />
                                    </div>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Name : Asus Zenbook</h1>
                                    <h1 className='text-xl text-center font-bold text-cyan-400'>Price- $ 2000</h1>
                                    <div class="flex space-x-2 text-sm font-medium justify-center mt-3">
                                        <Link to='/macbook'> <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                            <span>Go to Inventory</span>
                                        </button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                </div>
            </div>
        </div>
    );
};

export default Product;