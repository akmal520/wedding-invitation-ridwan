import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Comment = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    });

    const [formData, setFormData] = useState({
        nama: '',
        kehadiran: '',
        pesan: '',
    });
    // const [jsonOutput, setJsonOutput] = useState([]);
    const [fileData, setFileData] = useState([]);
    const [error, setError] = useState('');

    const fetchData = () => {
        axios
            .get('https://test-api-navy.vercel.app/data')
            .then((response) => {
                setFileData(response.data);
            })
            .catch((error) => {
                setError('Error load JSON data');
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const ecodedData = qs.stringify(formData);
        //     const res = await axios.post(
        //         'https://test-api-navy.vercel.app/data',
        //         ecodedData,
        //         {
        //             headers: {
        //                 'Content-Type': 'application/x-www-form-urlencoded',
        //             },
        //         }
        //     );

        //     setFileData([...fileData, res.data]);
        //     setFormData({
        //         nama: '',
        //         kehadiran: '',
        //         pesan: '',
        //     });
        // } catch (error) {
        //     setError('Error load JSON data');
        // }

        axios
            .post('https://test-api-navy.vercel.app/data', formData)
            .then((response) => {
                // setJsonOutput(response.data);
                setFileData([...fileData, response.data]);
                setFormData({
                    nama: '',
                    kehadiran: '',
                    pesan: '',
                });
                fetchData();
            })
            .catch((error) => {
                setError('Error load JSON data');
            });
    };

    return (
        <section className="container">
            <div className="relative bg-[#0f0e17] flex flex-col justify-center items-center py-6">
                <div className="w-[350px] text-center flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h1
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            className="text-[#fffffe] font-comforta font-bold text-2xl leading-[120%] tracking-wider capitalize"
                        >
                            katakan sesuatu
                        </h1>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="text-[#a7a9be] font-comforta font-medium text-sm leading-[120%] tracking-wider italic capitalize"
                        >
                            kirimkan doa & ucapan kepada kedua mempelai
                        </p>
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="flex flex-col justify-center items-center w-[310px] bg-[#2e2f3e] rounded-lg gap-4"
                    >
                        <form onClick={handleSubmit} className="flex flex-col gap-8 py-6 px-4">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="nama"
                                    className="text-[#a7a9be] text-start text-lg font-comforta font-medium leading-[120%] capitalize"
                                >
                                    nama
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                    className="border border-[#a7a9be] bg-[#262733] rounded-lg px-4 py-2 w-full text-start"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="pesan"
                                    className="text-[#a7a9be] text-start text-lg font-comforta font-medium leading-[120%] capitalize"
                                >
                                    pesan
                                </label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    value={formData.pesan}
                                    onChange={handleChange}
                                    required
                                    className="border border-[#a7a9be] bg-[#262733] rounded-lg px-4 py-2 resize-y h-[100px] w-full text-start"
                                ></textarea>
                            </div>
                            <div className="w-full text-start flex flex-col gap-2">
                                <label
                                    htmlFor="kehadiran"
                                    className="text-[#a7a9be] text-start text-lg font-comforta font-medium leading-[120%] capitalize"
                                >
                                    kehadiran
                                </label>
                                <select
                                    name="kehadiran"
                                    id="kehadiran"
                                    value={formData.kehadiran}
                                    onChange={handleChange}
                                    required
                                    className="border border-[#a7a9be] bg-[#262733] rounded-lg px-4 py-2 w-full text-start"
                                >
                                    <option disabled value="">
                                        Pilih Kehadiran
                                    </option>
                                    <option value="Hadir">Hadir</option>
                                    <option value="Tidak Hadir">
                                        Tidak Hadir
                                    </option>
                                    <option value="Masih Ragu">
                                        Masih Ragu
                                    </option>
                                </select>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="border border-[#a7a9be] rounded-lg px-4 py-3 hover:bg-[#a7a9be] transition-all duration-500 text-[#a7a9be] hover:text-[#0f0e17] text-md font-comforta font-medium leading-[120%] capitalize"
                                >
                                    kirim pesan
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="flex flex-col justify-start items-start w-[310px] h-[350px] bg-[#2e2f3e] rounded-lg gap-4 p-4 overflow-y-auto overflow-x-hidden"
                    >
                        <div id="komentar" className="flex flex-col gap-4">
                            {fileData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-start items-start gap-4 bg-[#0f0e17] rounded-lg p-4 w-[278px]"
                                >
                                    <div className="flex justify-between items-center gap-4">
                                        <p className="text-[#a7a9be] text-start font-comforta text-base font-semibold leading-[150%] capitalize">
                                            {item.nama}
                                        </p>
                                        <p className="bg-[#a7a9be] rounded-lg px-2 py-[2px] text-[#0f0e17] capitalize text-xs font-comforta font-bold">
                                            {item.kehadiran}
                                        </p>
                                    </div>
                                    <p className="text-[#a7a9be] text-start text-pretty font-comforta text-sm font-semibold leading-[150%]">
                                        {item.pesan}
                                    </p>
                                </div>
                            ))}

                            {/* <div className="flex flex-col justify-start items-start gap-4 bg-[#0f0e17] rounded-lg p-4 w-full">
                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-[#a7a9be] text-start font-comforta text-base font-semibold leading-[150%] capitalize">
                                        Akmal Bentar S
                                    </p>
                                    <p className="bg-[#a7a9be] rounded-lg px-2 py-[2px] text-[#0f0e17] capitalize text-xs font-comforta font-bold">
                                        hadir
                                    </p>
                                </div>
                                <p className="text-[#a7a9be] text-start font-comforta text-sm font-semibold leading-[150%]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Id omnis soluta dolore
                                    eveniet quaerat porro quidem accusamus.
                                    Dolores necessitatibus mollitia fugit
                                    explicabo ratione. Aut quis suscipit
                                    pariatur quasi tempore ut!
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comment;
