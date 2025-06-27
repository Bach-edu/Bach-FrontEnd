import { useState } from 'react';

const genresList = ['Rock', 'Pop', 'Jazz', 'Blues', 'Electronic', 'Classical', 'Hip-Hop', 'Reggae'];

const EditProfile = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('');
    const [instruments, setInstruments] = useState([]);
    const [newInstrument, setNewInstrument] = useState('');
    const [bio, setBio] = useState('');
    const [genres, setGenres] = useState([]);
    const [objectives, setObjectives] = useState([]);
    const [newObjective, setNewObjective] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const toggleGenre = (genre) => {
        setGenres((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
    };

    const addInstrument = () => {
        if (newInstrument.trim()) {
            setInstruments([...instruments, newInstrument.trim()]);
            setNewInstrument('');
        }
    };

    const removeInstrument = (instrument) => {
        setInstruments(instruments.filter((i) => i !== instrument));
    };

    const addObjective = () => {
        if (newObjective.trim()) {
            setObjectives([...objectives, newObjective.trim()]);
            setNewObjective('');
        }
    };

    const removeObjective = (index) => {
        setObjectives(objectives.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, location, level, instruments, bio, genres, objectives });
    };

    return (
        <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-8'>
            <h2 className="text-3xl font-bold text-center sm:text-left">Edit Profile</h2>
            <form className="space-y-10" onSubmit={handleSubmit}>

                {/* Sección de perfil */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                            ) : (
                                <div className="w-auto h-auto p-2 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                    No Image
                                </div>
                            )}
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Level</label>
                            <input
                                type="text"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Instruments</label>
                            <div className="flex sm:flex-row flex-col gap-2 mt-1">
                                <input
                                    type="text"
                                    value={newInstrument}
                                    onChange={(e) => setNewInstrument(e.target.value)}
                                    className="flex-1 border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                />
                                <button
                                    type="button"
                                    onClick={addInstrument}
                                    className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {instruments.map((inst, idx) => (
                                    <span key={idx} className="bg-gray-200 px-2 py-1 rounded-full text-sm flex items-center gap-1">
                                        {inst}
                                        <button type="button" onClick={() => removeInstrument(inst)} className="text-red-500 font-bold">×</button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Bio</label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                rows="5"
                            />
                        </div>
                    </div>
                </div>

                {/* Géneros musicales */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Genres</label>
                    <div className="flex flex-wrap gap-2">
                        {genresList.map((genre) => (
                            <button
                                type="button"
                                key={genre}
                                onClick={() => toggleGenre(genre)}
                                className={`px-3 py-1 rounded-full border text-sm ${
                                    genres.includes(genre)
                                        ? 'bg-purple-600 text-white border-purple-600'
                                        : 'bg-white text-gray-700 border-gray-300'
                                }`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Objetivos */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Goals</label>
                    <div className="flex gap-2 mt-1 flex-col sm:flex-row">
                        <input
                            type="text"
                            value={newObjective}
                            onChange={(e) => setNewObjective(e.target.value)}
                            className="flex-1 border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        />
                        <button
                            type="button"
                            onClick={addObjective}
                            className="bg-purple-600 text-white px-4 py-1.5 rounded hover:bg-purple-700"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        {objectives.map((obj, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <span>{obj}</span>
                                <button
                                    type="button"
                                    onClick={() => removeObjective(index)}
                                    className="text-red-500 ml-2"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white text-lg px-4 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
