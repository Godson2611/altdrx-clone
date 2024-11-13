import logo from "../assets/svg/alt-dim-logo.svg";

const Header = () => {
  return (
    <nav
      class='navbar navbar-expand-lg py-3 py-md-4
     shadow p-3 mb-5 bg-body-tertiary px-md-4'
    >
      <div class='container-fluid'>
        <img class='navbar-brand' width={190} src={logo} alt='alt-drx logo' />
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ms-auto mb-2 mb-lg-0 px-2'>
            <li class='nav-item px-2'>
              <a
                class='nav-link text-uppercase text-blue'
                aria-current='page'
                href='#'
              >
                About us
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link text-uppercase text-blue' href='#'>
                Private opportunity
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link text-uppercase text-blue' href='#'>
                Invest
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link text-uppercase text-blue' href='#'>
                Faqs
              </a>
            </li>
          </ul>
          <form class='d-flex' role='search'>
            <button
              class='btn btn-dark fs-6 text-uppercase px-3 rounded-5 fw-semibold'
              type='submit'
            >
              sign up | Sign in
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header;
