import React, { useState, useMemo, useCallback } from 'react';
import { Search, SearchX } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { countries } from '../data/countries';

const CountrySelection = ({ selectedCountry, onCountrySelect, onNext, onCancel }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) {
      return countries.all;
    }
    
    return countries.all.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredPopularCountries = useMemo(() => {
    if (!searchQuery.trim()) {
      return countries.popular;
    }
    
    return countries.popular.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const CountryButton = ({ country }) => {
    const isSelected = selectedCountry?.code === country.code;
    
    return (
      <button
        onClick={() => onCountrySelect(isSelected ? null : country)}
        className={`flex items-center gap-3 p-3 rounded-lg border transition-all font-noto w-full min-h-[3.5rem] ${
          isSelected
            ? 'bg-green-50 text-green-900 border-green-600'
            : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700'
        }`}
        style={isSelected ? { boxShadow: 'inset 0 0 0 0.5px rgb(22 163 74)' } : {}}
        aria-label={isSelected ? `Deselect ${country.name}` : `Select ${country.name}`}
      >
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{
            width: '1.5em',
            height: '1.5em',
            flexShrink: 0,
          }}
        />
        <span className="text-left text-sm leading-tight flex-1">
          {country.name}
        </span>
      </button>
    );
  };

  const showEmptyState = searchQuery.trim() && filteredCountries.length === 0;

  return (
    <div className="flex flex-col h-[calc(100vh-170px)] mt-10">
      {/* Fixed Header Section */}
      <div className="">
        <h1 className="text-2xl font-medium text-slate-800 font-noto mb-6">
          Select your country of residence
        </h1>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search for countries"
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:border-slate-500 focus:outline-none text-slate-900 placeholder-slate-400 font-noto text-sm font-normal hover:border-slate-300 w-1/2"
            aria-describedby="search-instructions"
          />
        </div>
      </div>

      {/* Scrollable Content Area with Fade Overlay */}
      <div className="flex-1 relative min-h-0">
        <div className="h-full overflow-y-auto pr-2 sleek-scrollbar">
          {showEmptyState ? (
            <div className="text-center py-16">
              <SearchX className="mx-auto mb-4 text-slate-400" size={48} />
              <h3 className="text-lg font-medium text-slate-700 font-noto mb-2">
                No countries found
              </h3>
              <p className="text-slate-500 font-noto">
                Try adjusting your search
              </p>
            </div>
          ) : (
            <div className="space-y-8 pb-6">
              {/* Most Popular Countries */}
              {filteredPopularCountries.length > 0 && (
                <div>
                  <h2 className="text-sm font-normal text-slate-600 font-noto mb-4">
                    Most popular countries
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredPopularCountries.map((country) => (
                      <CountryButton key={country.code} country={country} />
                    ))}
                  </div>
                </div>
              )}

              {/* All Countries */}
              {filteredCountries.length > 0 && (
                <div>
                  <h2 className="text-sm font-normal text-slate-600 font-noto mb-4">
                    {searchQuery.trim() ? 'Search results' : 'All countries'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredCountries.map((country) => (
                      <CountryButton key={country.code} country={country} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Fixed Bottom Actions */}
      <div className="flex-shrink-0 flex justify-between pt-6 pb-2 bg-white">
        <button
          onClick={onCancel}
          className="px-6 py-1 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 font-noto font-normal transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onNext}
          disabled={!selectedCountry}
          className={`px-6 py-2 rounded-full font-noto font-normal transition-colors ${
            selectedCountry
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default CountrySelection;