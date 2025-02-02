import React from 'react';
import { Menu, Image, Pencil, Globe, Camera, Video, Link, Plus, Search, Send } from 'lucide-react';

export default function QwenInterface() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="w-full px-4 py-3 flex items-center justify-between bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Pencil className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 pl-2">
            <img
              src="/logo.png"
              alt="Qwen Logo"
              className="h-8 w-auto object-contain hover:opacity-90 transition-opacity"
            />
            <div className="text-purple-600 animate-pulse">⚡</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">Help</button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 cursor-pointer hover:opacity-90 transition-opacity shadow-md" />
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col items-center justify-center -mt-16">
        <div className="flex items-center gap-2 mb-8 transform hover:scale-105 transition-transform">
          <img
            src="/logo.png"
            alt="Qwen Logo"
            className="h-14 w-auto object-contain drop-shadow-md"
          />
          <div className="text-purple-600 text-2xl animate-pulse">⚡</div>
        </div>

        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-8">
          Good morning, Dheiver Santos
        </h1>
        
        <div className="w-full max-w-2xl relative mb-8 group">
          <input
            type="text"
            placeholder="How can I help you today?"
            className="w-full p-4 pl-12 pr-12 rounded-xl bg-white border border-gray-200 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <Send className="w-4 h-4 text-purple-600" />
          </button>
        </div>

        <div className="flex justify-center gap-8 mb-10 text-sm text-gray-600">
          {[
            { icon: Image, label: 'Artifacts' },
            { icon: Globe, label: 'Web Search' },
            { icon: Camera, label: 'Image Generation' },
            { icon: Video, label: 'Video Generation' }
          ].map((item, index) => (
            <button key={index} className="group flex flex-col items-center gap-2 hover:text-purple-600 transition-colors">
              <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:border-purple-200 group-hover:shadow-md transition-all">
                <item.icon className="w-4 h-4" />
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 px-4">
          {[
            { icon: Camera, label: 'Create image' },
            { icon: Image, label: 'Code' },
            { icon: Link, label: 'Make a plan' },
            { icon: Plus, label: 'News' },
            { label: 'More' }
          ].map((button, index) => (
            <button
              key={index}
              className="px-5 py-2.5 rounded-full bg-white border border-gray-200 hover:border-purple-200 hover:bg-purple-50 text-sm flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all shadow-sm hover:shadow-md"
            >
              {button.icon && <button.icon className="w-4 h-4" />}
              {button.label}
            </button>
          ))}
        </div>
      </main>

      <button className="fixed bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-purple-600 hover:border-purple-200 hover:shadow-lg transition-all">
        ?
      </button>
    </div>
  );
}