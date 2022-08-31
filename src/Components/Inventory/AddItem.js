import React from 'react';
import { useForm } from 'react-hook-form';
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const handleAdd = (data, event) => {
        const url = `https://fierce-wave-53573.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                // toast('product Added sucessfully')
                event.target.reset()
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleAdd)}>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Input Name" type="text" class="input input-bordered input-success w-full max-w-xs" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Price</span>
                                    </label>
                                    <input {...register("price")} placeholder="Input Price" type="number" class="input input-bordered input-success w-full max-w-xs" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Image</span>
                                    </label>
                                    <input {...register("img")} placeholder="Input Url" type="text" class="input input-bordered input-success w-full max-w-xs" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Quantity</span>
                                    </label>
                                    <input {...register("quantity")} placeholder="Input Quantity" type="number" class="input input-bordered input-success w-full max-w-xs" />
                                </div>
                                <div className='mt-5'>
                                    <button type='submit' class="btn glass">Add Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddItem;