import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

function CandidateCard({ candidate, isSelected, onSelect }) {
    return (
        <article
            className={`flex justify-between items-center p-4 w-full bg-white cursor-pointer border-2 ${
                isSelected ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={onSelect}
        >
            <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full border-2 ${
                    isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                }`} />
                <span className="text-xl">{candidate.name}</span>
            </div>
            <div className="flex items-center gap-8">
                <span className="text-xl">{candidate.party}</span>
                <span className="text-gray-700 font-semibold">SSN: {candidate.ssn || 'N/A'}</span>
                <ChevronDown className="w-6 h-6 text-gray-500" />
            </div>
        </article>
    );
}

function AddCandidateForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        party: '',
        age: '',
        education: '',
        ssn: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', party: '', age: '', education: '', ssn: '' });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Add New Candidate</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 border rounded"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Party"
                        className="w-full p-2 border rounded"
                        value={formData.party}
                        onChange={(e) => setFormData({ ...formData, party: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        className="w-full p-2 border rounded"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Education"
                        className="w-full p-2 border rounded"
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="SSN"
                        className="w-full p-2 border rounded"
                        value={formData.ssn}
                        onChange={(e) => setFormData({ ...formData, ssn: e.target.value })}
                        required
                    />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add Candidate
                    </button>
                </div>
            </form>
        </div>
    );
}

export function VotingPanel() {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [candidates, setCandidates] = useState([
        {
            name: "Dr. Ramcharan Swaminathan",
            party: "BerryBoys",
            age: 19,
            education: "Phd. Greenhouse, M.St - Master of Strawberry",
            ssn: "SSN1234"
        },
        {
            name: "Rahul",
            party: "BJP",
            age: 45,
            education: "MBA",
            ssn: "SSN5678"
        },
        {
            name: "Rahul Gandhi",
            party: "Congress",
            age: 50,
            education: "M.A. Political Science",
            ssn: "SSN9101"
        },
        {
            name: "Arvind Kejriwal",
            party: "AAP",
            age: 52,
            education: "B.Tech Mechanical Engineering",
            ssn: "SSN1121"
        }
    ]);

    const handleAddCandidate = (newCandidate) => {
        setCandidates([...candidates, newCandidate]);
        setShowAddForm(false);
    };

    const handleSubmit = () => {
        if (selectedCandidate) {
            alert(`Vote submitted for ${selectedCandidate.name} from ${selectedCandidate.party}`);
        } else {
            alert('Please select a candidate first');
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-950 to-blue-900 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl text-white mb-6">Voting Panel</h1>

                <div className="space-y-4">
                    {/* Selected Candidate Details */}
                    {selectedCandidate && (
                        <div className="bg-gray-600 p-4 rounded">
                            <div className="flex justify-between items-center text-white mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full" />
                                    <span className="text-xl">{selectedCandidate.name}</span>
                                </div>
                                <span className="text-xl">{selectedCandidate.party}</span>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <p><strong>Name:</strong> {selectedCandidate.name}</p>
                                <p><strong>Age:</strong> {selectedCandidate.age || 'N/A'}</p>
                                <p><strong>Party:</strong> {selectedCandidate.party}</p>
                                <p><strong>Education:</strong> {selectedCandidate.education || 'N/A'}</p>
                                <p><strong>SSN:</strong> {selectedCandidate.ssn}</p>
                            </div>
                        </div>
                    )}

                    {/* Candidate List */}
                    <div className="space-y-2">
                        {candidates.map((candidate, index) => (
                            <CandidateCard
                                key={index}
                                candidate={candidate}
                                isSelected={selectedCandidate?.name === candidate.name}
                                onSelect={() => setSelectedCandidate(candidate)}
                            />
                        ))}
                    </div>

                    {/* Add Candidate Button */}
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="flex items-center gap-2 text-white hover:text-blue-200 mt-4"
                    >
                        <Plus className="w-5 h-5" />
                        Add New Candidate
                    </button>

                    {/* Confirmation Checkbox */}
                    {selectedCandidate && (
                        <div className="flex items-center gap-4 text-white mt-6">
                            <input type="checkbox" className="w-5 h-5" />
                            <span>
                                I have selected {selectedCandidate.name} from {selectedCandidate.party} as my candidate.
                            </span>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full max-w-xs mx-auto block px-8 py-3 bg-blue-600 text-white text-xl rounded hover:bg-blue-700 mt-6"
                    >
                        SUBMIT
                    </button>
                </div>

                {/* Add Candidate Form Modal */}
                {showAddForm && (
                    <AddCandidateForm
                        onSubmit={handleAddCandidate}
                        onCancel={() => setShowAddForm(false)}
                    />
                )}
            </div>
        </main>
    );
}

export default VotingPanel;
