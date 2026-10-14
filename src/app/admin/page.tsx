"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useData, Product, BlogPost, GalleryItem } from "@/context/DataContext";

type AdminTab = "products" | "blogs" | "gallery" | "enquiries";

export default function AdminPage() {
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    blogs,
    addBlog,
    deleteBlog,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    enquiries,
    deleteEnquiry,
    resetToDefaults,
  } = useData();

  const [activeTab, setActiveTab] = useState<AdminTab>("products");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Product Modal State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productForm, setProductForm] = useState({
    name: "",
    category: "spices" as Product["category"],
    categoryLabel: "Spices & Botanicals",
    hsCode: "HS: 0910.00.00",
    description: "",
    imgUrl: "/images/products_banner_spices.jpg",
    grade: "Export Grade A",
    packaging: "25kg / 50kg Bags",
    moq: "10 Metric Tons",
  });

  // Blog Modal State
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: "",
    category: "LOGISTICS & TRADE",
    readTime: "5 MIN READ",
    summary: "",
    imgUrl: "/images/banner_port_cranes.jpg",
    author: "Bharat Export Operations",
  });

  // Gallery Modal State
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    subtitle: "PORT & CARGO OPERATIONS",
    category: "shipping" as GalleryItem["category"],
    badge: "EXPORT YARD",
    meta: "GATE-IN VERIFIED",
    description: "",
    imgUrl: "/images/banner_port_cranes.jpg",
    alt: "Operational export photo",
  });

  const showFlash = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(""), 3500);
  };

  // Product Actions
  const handleOpenAddProduct = () => {
    setEditingProductId(null);
    setProductForm({
      name: "",
      category: "spices",
      categoryLabel: "Spices & Botanicals",
      hsCode: "HS: 0910.00.00",
      description: "",
      imgUrl: "/images/products_banner_spices.jpg",
      grade: "Export Grade A",
      packaging: "25kg / 50kg Bags",
      moq: "10 Metric Tons",
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (p: Product) => {
    setEditingProductId(p.id);
    setProductForm({
      name: p.name,
      category: p.category,
      categoryLabel: p.categoryLabel,
      hsCode: p.hsCode,
      description: p.description,
      imgUrl: p.imgUrl,
      grade: p.grade,
      packaging: p.packaging,
      moq: p.moq,
    });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProductId) {
      updateProduct(editingProductId, productForm);
      showFlash(`Product "${productForm.name}" updated successfully.`);
    } else {
      addProduct({
        ...productForm,
        categoryColor: "text-[#123D2B]",
        specs: [
          { label: "Grade", value: productForm.grade },
          { label: "Packaging", value: productForm.packaging },
          { label: "MOQ", value: productForm.moq },
        ],
      });
      showFlash(`New product "${productForm.name}" added to catalogue.`);
    }
    setIsProductModalOpen(false);
  };

  // Blog Actions
  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).toUpperCase();

    addBlog({
      ...blogForm,
      slug: "export-documentation-guide",
      date: dateStr,
    });
    showFlash(`New blog article published successfully.`);
    setIsBlogModalOpen(false);
  };

  // Gallery Actions
  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    addGalleryItem(galleryForm);
    showFlash(`New gallery asset uploaded successfully.`);
    setIsGalleryModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#F4EFE6] text-[#1A241F] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Control Bar */}
        <div className="bg-[#0B281D] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#C5A15B]/40 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D2B] border border-[#C5A15B]/30 text-[#E5B80B] text-xs font-bold uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E5B80B] animate-pulse" />
              Content Management System
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F7F4EB]">
              Bharat Global Exports <span className="text-[#E5B80B]">Admin Console</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#DDD4BF] mt-1">
              Live B2B content manager: easily add, edit, or delete products, blogs, gallery assets, and inspect buyer quote inquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-[#C5A15B]/40 transition-all flex items-center gap-2"
            >
              <span>View Public Website</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                if (confirm("Reset all catalogue, blog, and gallery data to verified defaults?")) {
                  resetToDefaults();
                  showFlash("Reset to default factory seed data.");
                }
              }}
              className="px-4 py-2.5 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 text-xs font-bold uppercase tracking-wider border border-red-700/50 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">restart_alt</span>
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Flash Message */}
        {successMessage && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-900 text-emerald-100 border border-emerald-500 shadow-md flex items-center gap-3 animate-fadeIn">
            <span className="material-symbols-outlined text-emerald-400">check_circle</span>
            <span className="text-sm font-semibold">{successMessage}</span>
          </div>
        )}

        {/* Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div
            onClick={() => setActiveTab("products")}
            className={`p-5 rounded-xl border transition-all cursor-pointer ${
              activeTab === "products"
                ? "bg-[#123D2B] text-white border-[#E5B80B] shadow-lg scale-[1.02]"
                : "bg-white border-[#E2D9C8] hover:border-[#C5A15B]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                Products Manifest
              </span>
              <span className="material-symbols-outlined text-[#E5B80B]">inventory_2</span>
            </div>
            <div className="text-3xl font-black mt-2 font-mono">{products.length}</div>
            <span className="text-[11px] opacity-75 mt-1 block">Live export commodities</span>
          </div>

          <div
            onClick={() => setActiveTab("blogs")}
            className={`p-5 rounded-xl border transition-all cursor-pointer ${
              activeTab === "blogs"
                ? "bg-[#123D2B] text-white border-[#E5B80B] shadow-lg scale-[1.02]"
                : "bg-white border-[#E2D9C8] hover:border-[#C5A15B]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                Trade Blogs
              </span>
              <span className="material-symbols-outlined text-[#E5B80B]">article</span>
            </div>
            <div className="text-3xl font-black mt-2 font-mono">{blogs.length}</div>
            <span className="text-[11px] opacity-75 mt-1 block">Articles & advisories</span>
          </div>

          <div
            onClick={() => setActiveTab("gallery")}
            className={`p-5 rounded-xl border transition-all cursor-pointer ${
              activeTab === "gallery"
                ? "bg-[#123D2B] text-white border-[#E5B80B] shadow-lg scale-[1.02]"
                : "bg-white border-[#E2D9C8] hover:border-[#C5A15B]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                Gallery Assets
              </span>
              <span className="material-symbols-outlined text-[#E5B80B]">photo_library</span>
            </div>
            <div className="text-3xl font-black mt-2 font-mono">{gallery.length}</div>
            <span className="text-[11px] opacity-75 mt-1 block">Port & QC photos</span>
          </div>

          <div
            onClick={() => setActiveTab("enquiries")}
            className={`p-5 rounded-xl border transition-all cursor-pointer ${
              activeTab === "enquiries"
                ? "bg-[#123D2B] text-white border-[#E5B80B] shadow-lg scale-[1.02]"
                : "bg-white border-[#E2D9C8] hover:border-[#C5A15B]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                Buyer Enquiries
              </span>
              <span className="material-symbols-outlined text-[#E5B80B]">mark_email_unread</span>
            </div>
            <div className="text-3xl font-black mt-2 font-mono">{enquiries.length}</div>
            <span className="text-[11px] opacity-75 mt-1 block">Inbound RFQs & quotes</span>
          </div>
        </div>

        {/* Tab Navigation Navigation */}
        <div className="flex items-center gap-2 border-b-2 border-[#D8CEBC] pb-3 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "products"
                ? "bg-[#0B281D] text-white shadow-md border-b-2 border-[#E5B80B]"
                : "bg-white text-[#3B4A40] hover:bg-[#ECE6D8]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">inventory_2</span>
            <span>Products ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "blogs"
                ? "bg-[#0B281D] text-white shadow-md border-b-2 border-[#E5B80B]"
                : "bg-white text-[#3B4A40] hover:bg-[#ECE6D8]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">article</span>
            <span>Blogs ({blogs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "gallery"
                ? "bg-[#0B281D] text-white shadow-md border-b-2 border-[#E5B80B]"
                : "bg-white text-[#3B4A40] hover:bg-[#ECE6D8]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">photo_library</span>
            <span>Gallery Assets ({gallery.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("enquiries")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "enquiries"
                ? "bg-[#0B281D] text-white shadow-md border-b-2 border-[#E5B80B]"
                : "bg-white text-[#3B4A40] hover:bg-[#ECE6D8]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">inbox</span>
            <span>Enquiries ({enquiries.length})</span>
          </button>
        </div>

        {/* 1. PRODUCTS TAB */}
        {activeTab === "products" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E2D9C8]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E2D9C8]">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A241F]">
                  Export Commodity Catalogue
                </h2>
                <p className="text-xs sm:text-sm text-[#3B4A40]">
                  Manage commodities displayed on the Products page. Add new export items or modify specs.
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenAddProduct}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#BA1A1A] to-[#860F0F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center gap-2 shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>Add New Product</span>
              </button>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#ECE6D8] text-[#1A241F] font-bold uppercase text-[11px] tracking-wider border-b border-[#D8CEBC]">
                    <th className="py-3 px-4">Commodity</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">HS Code</th>
                    <th className="py-3 px-4">Grade / Standard</th>
                    <th className="py-3 px-4">MOQ</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2D9C8]">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF7F0] transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-[#1A241F]">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.imgUrl}
                            alt={p.name}
                            className="w-10 h-10 rounded-lg object-cover border border-[#C5A15B]/30 shrink-0"
                          />
                          <div>
                            <div className="font-bold">{p.name}</div>
                            <div className="text-[11px] text-[#3B4A40] max-w-xs truncate">
                              {p.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded bg-[#E7EDE6] text-[#123D2B] font-bold text-xs uppercase tracking-wider">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-semibold">{p.hsCode}</td>
                      <td className="py-3.5 px-4 text-[#3B4A40]">{p.grade}</td>
                      <td className="py-3.5 px-4 font-mono text-xs">{p.moq}</td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          type="button"
                          onClick={() => handleOpenEditProduct(p)}
                          className="px-3 py-1.5 rounded-lg bg-[#ECE6D8] hover:bg-[#DDD4BF] text-[#123D2B] font-bold text-xs transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Delete "${p.name}"?`)) {
                              deleteProduct(p.id);
                              showFlash(`Product "${p.name}" deleted.`);
                            }
                          }}
                          className="px-3 py-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-800 font-bold text-xs transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 2. BLOGS TAB */}
        {activeTab === "blogs" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E2D9C8]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E2D9C8]">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A241F]">
                  Trade Blog Articles & Advisories
                </h2>
                <p className="text-xs sm:text-sm text-[#3B4A40]">
                  Publish maritime guides, regulatory advisories, and export compliance bulletins.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsBlogModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#BA1A1A] to-[#860F0F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center gap-2 shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">post_add</span>
                <span>Publish New Article</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#F7F4EB] border border-[#C5A15B]/30 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-[#0B281D] text-[#E5B80B] font-mono text-[10px] font-bold uppercase tracking-wider">
                        {b.category}
                      </span>
                      <span className="text-xs text-[#3B4A40] font-mono">{b.date}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1A241F] mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#3B4A40] leading-relaxed line-clamp-3">
                      {b.summary}
                    </p>
                  </div>

                  <div className="px-5 py-3.5 bg-[#ECE6D8] border-t border-[#DDD4BF] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#3B4A40]">{b.author}</span>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete article "${b.title}"?`)) {
                          deleteBlog(b.id);
                          showFlash(`Article deleted.`);
                        }
                      }}
                      className="text-xs text-red-700 hover:text-red-900 font-bold uppercase tracking-wider"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. GALLERY TAB */}
        {activeTab === "gallery" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E2D9C8]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E2D9C8]">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A241F]">
                  Terminal & Operational Gallery
                </h2>
                <p className="text-xs sm:text-sm text-[#3B4A40]">
                  Upload and manage photo documentation of deepwater port berthing, Sortex cleaning, and lab inspections.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsGalleryModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#BA1A1A] to-[#860F0F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center gap-2 shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span>
                <span>Add Gallery Asset</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((g) => (
                <div
                  key={g.id}
                  className="bg-[#F7F4EB] border border-[#C5A15B]/30 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-[#ECE6D8] overflow-hidden">
                    <img
                      src={g.imgUrl}
                      alt={g.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[#0B281D] text-white font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                      {g.badge}
                    </span>
                  </div>
                  <div className="p-4 flex-1">
                    <h4 className="font-serif text-sm font-bold text-[#1A241F] mb-1">
                      {g.title}
                    </h4>
                    <p className="text-xs text-[#3B4A40] line-clamp-2">{g.description}</p>
                  </div>
                  <div className="p-3 bg-[#ECE6D8] border-t border-[#DDD4BF] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#3B4A40] uppercase">
                      Category: {g.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete gallery image "${g.title}"?`)) {
                          deleteGalleryItem(g.id);
                          showFlash(`Gallery asset deleted.`);
                        }
                      }}
                      className="text-red-700 hover:text-red-900 font-bold uppercase tracking-wider"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ENQUIRIES TAB */}
        {activeTab === "enquiries" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E2D9C8]">
            <div className="mb-6 pb-6 border-b border-[#E2D9C8]">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A241F]">
                Inbound B2B Trade Enquiries & Quote Requests
              </h2>
              <p className="text-xs sm:text-sm text-[#3B4A40]">
                Live record of prospective international buyer quote submissions collected from the website.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#ECE6D8] text-[#1A241F] font-bold uppercase text-[11px] tracking-wider border-b border-[#D8CEBC]">
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Buyer / Company</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Requested Commodity</th>
                    <th className="py-3 px-4">Destination Port</th>
                    <th className="py-3 px-4">Quantity / Notes</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2D9C8]">
                  {enquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-[#FAF7F0] transition-colors">
                      <td className="py-3.5 px-4 font-mono text-[11px] text-[#3B4A40] whitespace-nowrap">
                        {enq.date}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-[#1A241F]">{enq.fullName}</div>
                        {enq.company && (
                          <div className="text-[11px] text-[#3B4A40] font-semibold">
                            {enq.company}
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs">
                        <div>
                          <a
                            href={`mailto:${enq.email}`}
                            className="text-[#123D2B] font-bold hover:underline"
                          >
                            {enq.email}
                          </a>
                        </div>
                        {enq.phone && <div className="text-[#3B4A40]">{enq.phone}</div>}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-[#123D2B]">
                        {enq.commodity}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-[#3B4A40]">
                        {enq.destinationPort || "Not specified"}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[#3B4A40] max-w-xs">
                        <div><strong>Qty:</strong> {enq.quantity || "Full Container Load"}</div>
                        {enq.notes && <div className="italic truncate">{enq.notes}</div>}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Remove enquiry from "${enq.fullName}"?`)) {
                              deleteEnquiry(enq.id);
                              showFlash("Enquiry archived.");
                            }
                          }}
                          className="px-2.5 py-1 rounded bg-red-100 hover:bg-red-200 text-red-800 font-bold text-xs"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* PRODUCT MODAL */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#C5A15B]/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2D9C8] mb-6">
              <h3 className="font-serif text-xl font-bold text-[#1A241F]">
                {editingProductId ? "Edit Product" : "Add New Export Commodity"}
              </h3>
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="text-[#3B4A40] hover:text-[#1A241F]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  placeholder="e.g. Organic Black Mustard Seeds"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-[#123D2B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Category *
                  </label>
                  <select
                    value={productForm.category}
                    onChange={(e) => {
                      const cat = e.target.value as Product["category"];
                      const labels: Record<Product["category"], string> = {
                        grains: "Rice & Grains",
                        spices: "Spices & Botanicals",
                        textiles: "Raw Cotton & Textiles",
                        "dry-fruits": "Dry Fruits & Nuts",
                        pulses: "Pulses & Oilseeds",
                      };
                      setProductForm({
                        ...productForm,
                        category: cat,
                        categoryLabel: labels[cat],
                      });
                    }}
                    className="w-full px-3 py-2 border rounded-lg text-sm bg-white"
                  >
                    <option value="spices">Spices</option>
                    <option value="grains">Rice & Grains</option>
                    <option value="textiles">Textiles & Cotton</option>
                    <option value="dry-fruits">Dry Fruits & Nuts</option>
                    <option value="pulses">Pulses & Oilseeds</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    HS Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={productForm.hsCode}
                    onChange={(e) => setProductForm({ ...productForm, hsCode: e.target.value })}
                    placeholder="e.g. HS: 1207.50.00"
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  placeholder="Detailed description of commodity origins, flavor profile, and quality sorting..."
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Grade / Standard
                  </label>
                  <input
                    type="text"
                    value={productForm.grade}
                    onChange={(e) => setProductForm({ ...productForm, grade: e.target.value })}
                    placeholder="e.g. Sortex 100% Clean"
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    MOQ
                  </label>
                  <input
                    type="text"
                    value={productForm.moq}
                    onChange={(e) => setProductForm({ ...productForm, moq: e.target.value })}
                    placeholder="e.g. 20 Metric Tons"
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Image URL / Asset Path
                </label>
                <input
                  type="text"
                  value={productForm.imgUrl}
                  onChange={(e) => setProductForm({ ...productForm, imgUrl: e.target.value })}
                  placeholder="e.g. /images/products_banner_spices.jpg or https://..."
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E2D9C8]">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-[#ECE6D8] font-bold text-xs uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-[#0B281D] text-white font-bold text-xs uppercase hover:bg-[#123D2B]"
                >
                  Save Commodity
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BLOG MODAL */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#C5A15B]/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2D9C8] mb-6">
              <h3 className="font-serif text-xl font-bold text-[#1A241F]">
                Publish New Blog Article
              </h3>
              <button
                type="button"
                onClick={() => setIsBlogModalOpen(false)}
                className="text-[#3B4A40] hover:text-[#1A241F]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="e.g. Indian Spice Export Projections for 2027"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-[#123D2B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    required
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value.toUpperCase() })}
                    placeholder="e.g. INCOTERMS 2020"
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Author / Desk
                  </label>
                  <input
                    type="text"
                    required
                    value={blogForm.author}
                    onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Summary / Excerpt *
                </label>
                <textarea
                  required
                  rows={4}
                  value={blogForm.summary}
                  onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })}
                  placeholder="Brief synopsis for global trade directors..."
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Image Path / URL
                </label>
                <input
                  type="text"
                  value={blogForm.imgUrl}
                  onChange={(e) => setBlogForm({ ...blogForm, imgUrl: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E2D9C8]">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-[#ECE6D8] font-bold text-xs uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-[#0B281D] text-white font-bold text-xs uppercase hover:bg-[#123D2B]"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GALLERY MODAL */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#C5A15B]/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2D9C8] mb-6">
              <h3 className="font-serif text-xl font-bold text-[#1A241F]">
                Add Gallery Image Asset
              </h3>
              <button
                type="button"
                onClick={() => setIsGalleryModalOpen(false)}
                className="text-[#3B4A40] hover:text-[#1A241F]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveGallery} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Asset Title *
                </label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  placeholder="e.g. Deepwater Quay Gantry Loading at Dusk"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-[#123D2B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Category *
                  </label>
                  <select
                    value={galleryForm.category}
                    onChange={(e) =>
                      setGalleryForm({
                        ...galleryForm,
                        category: e.target.value as GalleryItem["category"],
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg text-sm bg-white"
                  >
                    <option value="shipping">Shipping & Port</option>
                    <option value="warehouse">Warehouse & Packing</option>
                    <option value="products">Products & Spices</option>
                    <option value="quality">Quality & Lab</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Terminal Badge
                  </label>
                  <input
                    type="text"
                    value={galleryForm.badge}
                    onChange={(e) => setGalleryForm({ ...galleryForm, badge: e.target.value.toUpperCase() })}
                    placeholder="e.g. BERTH 04 VISAKHAPATNAM"
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Image Path / URL *
                </label>
                <input
                  type="text"
                  required
                  value={galleryForm.imgUrl}
                  onChange={(e) => setGalleryForm({ ...galleryForm, imgUrl: e.target.value })}
                  placeholder="e.g. /images/banner_port_cranes.jpg"
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={galleryForm.description}
                  onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                  placeholder="Operational details of the consignment handling..."
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E2D9C8]">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-[#ECE6D8] font-bold text-xs uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-[#0B281D] text-white font-bold text-xs uppercase hover:bg-[#123D2B]"
                >
                  Save Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
