import './Blogs.css'

const Blogs = () => {
  return (
    <div className='md:container md:mx-auto'>
      {/* blogs section start */}
      <div className='grid grid-cols-1 gap-10'>
        <div className='mt-10 bg-slate-400 p-4'>
          <h1 className='md:text-2xl font-bold text-lg'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
          <p className='mt-1 text-sm md:text-lg'>Access token and refresh token are commonly used in authentication and authorization systems. An access token is a credential it use for save API header from anonymous user. And refresh token use for get new access token.</p>
        </div>
        <div className='mt-2 bg-slate-400 p-4'>
          <h1 className='md:text-2xl font-bold text-lg'>Compare SQL and NoSQL databases?</h1>
          <p className='mt-1 text-sm md:text-lg'>
            SQL and NoSQL are two types of database management systems.
          </p>
          <p><span className='font-bold'>SQL:</span> SQL database use a structured data modal based and use a structure schema with tables, columns, rows.</p>
          <p><span className='font-bold'>NoSQL:</span> NoSQL database is flexible data modal. They use a key-value, document, columnar,  graph-base modal.</p>
        </div>
        <div className='mt-2 bg-slate-400 p-4'>
          <h1 className='md:text-2xl font-bold text-lg'>What is express js? What is Nest JS?</h1>
          <p className='mt-1 text-sm md:text-lg'>Express.js is a popular web application framework for Node.js. Express.js make very easy to the process of handling HTTP requests, routing, middleware, managing server site function.</p>
          <p className='mt-1 text-sm md:text-lg'>Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).</p>
        </div>
        <div className='mt-2 mb-5 bg-slate-400 p-4'>
          <h1 className='md:text-2xl font-bold text-lg'>What is MongoDB aggregate and how does it work?</h1>
          <p className='mt-1 text-sm md:text-lg'>MongoDB aggregation is a powerful tool for performing advanced data processing and analysis task. It allows advanced operations on collections, including grouping, filtering, sorting, adn transforming data.</p>
        </div>
      </div>
      {/* blogs section end */}
    </div>
  );
};

export default Blogs;