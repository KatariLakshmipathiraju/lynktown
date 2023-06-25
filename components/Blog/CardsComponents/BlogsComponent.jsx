import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { IoIosShareAlt, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoLogoTwitter } from 'react-icons/io';
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";
import styles from "./BlogComponent.module.css";

const BlogsComponent = ({ data, posts, modalHandler, linkHandler }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [show_subscriber, setShowSubscriber] = useState("");
  const [blog_view_count, setBlogViewCount] = useState("");
  const [showIcons, setShowIcons] = useState(false);
  let url = 'https://www.lynktown.in/blogs/5/7-ways-fashion-entrepreneurs-can-create-long-lasting-customer-relationships';

  const shareToFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const shareToInstagram = () => {
    const instagramShareUrl = `https://www.instagram.com/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(instagramShareUrl, '_blank');
  };

  const shareToWhatsApp = () => {
    const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
    window.open(whatsappShareUrl, '_blank');
  };

  const shareToTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
    window.open(twitterShareUrl, '_blank');
  };

  const handleShare = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowIcons(true);
  };

  const handleIconClick = (platform) => {
    switch (platform) {
      case 'facebook':
        shareToFacebook();
        break;
      case 'instagram':
        shareToInstagram();
        break;
      case 'whatsapp':
        shareToWhatsApp();
        break;
      case 'twitter':
        shareToTwitter();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    var _blog_view_count = localStorage.getItem("blog_view");
    setBlogViewCount(_blog_view_count);
    var _show_subscriber = localStorage.getItem("show_subscriber");
    setShowSubscriber(_show_subscriber);
  }, []);

  const openLink = (e) => {
    e.stopPropagation();
    linkHandler.call();
    router.push(e.currentTarget.getAttribute('data-href'), undefined, { shallow: true });
  };

  return (
    <>
      {(data.length !== 0 ? data : posts).map((post) => {
        const title = post.title.replace(/ /g, "-");
        const href = `/blogs/${encodeURIComponent(
          post.id
        )}/${encodeURIComponent(title.toLowerCase())}`;

        return (
          <div
            onClick={openLink}
            data-href={href}
            key={post.id}
            className="mx-auto w-full md:w-[340px] lg:w-[300px] xl:w-[380px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer"
          >
            <div className="bg-white p-2">
              <img
                src={post.cover}
                alt=""
                className="object-cover w-full h-48"
              />
            </div>

            <div className="px-2 h-[60px]">
              <h1 className="w-[350px] mr-[10px] text-[18px] font-medium">
                {post?.title && post.title.length > 40
                  ? `${post.title.slice(0, 40)}...` // Limit the title to 20 characters and add ellipsis
                  : post.title}
              </h1>
              <p className="text-lg text-gray-400">
                by <span className="font-bold">Admin</span>
              </p>
            </div>

            <div className="flex justify-between items-center px-5">
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <p className="py-1">
                    <AiFillHeart />
                  </p>
                  <p className="text-[14px] flex items-center font-medium">
                    {post?.viewers ? post.viewers.length : 0}
                  </p>
                </div>
                <div className={`ml-4 flex items-center ${showIcons ? styles.showIcons : ""}`}>
  <IoIosShareAlt size={23} onClick={handleShare} />
  {showIcons && (
    <div className={styles.sharePopup}>
      <div className={styles.shareIcon} onClick={() => handleIconClick('facebook')}>
        <IoLogoFacebook size={20} />
      </div>
      <div className={styles.shareIcon} onClick={() => handleIconClick('instagram')}>
        <IoLogoInstagram size={20} />
      </div>
      <div className={styles.shareIcon} onClick={() => handleIconClick('whatsapp')}>
        <IoLogoWhatsapp size={20} />
      </div>
      <div className={styles.shareIcon} onClick={() => handleIconClick('twitter')}>
        <IoLogoTwitter size={20} />
      </div>
    </div>
  )}
</div>
{/* 
                <div className="ml-4 flex items-center">
                  <IoIosShareAlt size={23} onClick={handleShare} />
                  {showIcons && (
                    <div className={styles.sharePopup}>
                      <div className={styles.shareIcon} data-platform="facebook" onClick={handleIconClick}>
                        <IoLogoFacebook size={20} />
                      </div>
                      <div className={styles.shareIcon} data-platform="instagram" onClick={handleIconClick}>
                        <IoLogoInstagram size={20} />
                      </div>
                      <div className={styles.shareIcon} data-platform="whatsapp" onClick={handleIconClick}>
                        <IoLogoWhatsapp size={20} />
                      </div>
                      <div className={styles.shareIcon} data-platform="twitter" onClick={handleIconClick}>
                        <IoLogoTwitter size={20} />
                      </div>
                    </div>
                  )}
                </div> */}
              </div>

              <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                Read more
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogsComponent;