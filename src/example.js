<Router>
  <NavBar />
  <Routes>
    {/* <div className="max-w-screen-2xl mx-auto px-16"> */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/Contactinside" element={<Contactinside />}></Route>
    <Route path="/Projectinside" element={<Projectinside />}></Route>
    <Route path="/Aboutinside" element={<Aboutinside />}></Route>
  </Routes>
</Router>;
