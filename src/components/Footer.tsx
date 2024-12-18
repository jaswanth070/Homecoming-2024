import Logo from '../assets/gitamLogoGreenN.png';
import LogoImage from '../assets/HClogoN.png';

export default function Footer() {
  return (
    <div>
      <footer className="divide-y dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          
          {/* Section 1: Logo Images One Below Another */}
          <div className="flex flex-col items-center space-y-5 lg:w-1/3">
            <a rel="noopener noreferrer" href="#">
              <img src={Logo} className="w-32 h-auto rounded-full" alt="Logo 1" />
            </a>
            <a rel="noopener noreferrer" href="#">
              <img src={LogoImage} className="w-32 h-auto" alt="Logo 2" />
            </a>
          </div>
          
          {/* Section 2: Social Media Links in the Center */}
          <div className="flex flex-col items-center lg:w-1/3">
            <div className="uppercase py-4 font-semibold dark:text-gray-900">Follow Us</div>
            <div className="flex justify-center space-x-5">
              {/* Facebook */}
              <a rel="noopener noreferrer" href="#" title="Facebook" className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6 fill-current">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a rel="noopener noreferrer" href="https://www.linkedin.com/company/alumni-relations-at-gitamuniversity/" title="LinkedIn" target="_blank" className="p-1">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.723v20.554C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.723V1.723C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.546a2.056 2.056 0 1 1 0-4.113 2.056 2.056 0 0 1 0 4.113zM20.452 20.452h-3.561v-5.598c0-1.337-.024-3.062-1.868-3.062-1.87 0-2.157 1.461-2.157 2.97v5.69h-3.56V9h3.415v1.561h.048c.475-.9 1.635-1.848 3.366-1.848 3.599 0 4.262 2.37 4.262 5.452v6.287z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a rel="noopener noreferrer" href="https://www.instagram.com/homecoming_gitamvizag?igsh=a2RldGphc2ZzaXAy" target="_blank" title="Instagram" className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6 fill-current">
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zm0 14.188c-3.493 0-6.488-2.995-6.488-6.488 0-3.493 2.995-6.488 6.488-6.488 3.493 0 6.488 2.995 6.488 6.488 0 3.493-2.995 6.488-6.488 6.488zM22.903 7.002c-0.755 0-1.364-0.614-1.364-1.364 0-0.755 0.614-1.364 1.364-1.364 0.755 0 1.364 0.614 1.364 1.364 0 0.755-0.614 1.364-1.364 1.364z"></path>
                  </svg>
              </a>
            </div>
          </div>
          
          {/* Section 3: Contact Info at the Right */}
          <div className="lg:w-1/3 text-right">
            <div className="uppercase py-4 font-semibold dark:text-gray-900">Contact Us</div>
            <div className="space-y-2 text-sm">
              <p>Phone: 7842530045</p>
              <p>Email: hc2024vsp@gitam.edu</p>
              <p>Address: GITAM Gandhi Nagar, Rushikonda, Visakhapatnam, Andhra Pradesh 530045, India</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © Homecoming2024. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
