const RestaurantDishes = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Dishes</h2>
        <p className="muted">Curate dish transparency and highlight ingredient stories.</p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Dish Profiles</h3>
          <p className="muted">Build QR-ready profiles for each dish.</p>
          <button className="buttonSecondary">Create profile</button>
        </div>
        <div className="card">
          <h3>Menu Updates</h3>
          <p className="muted">Schedule seasonal updates and rotations.</p>
          <button className="buttonSecondary">Schedule update</button>
        </div>
        <div className="card">
          <h3>Storytelling</h3>
          <p className="muted">Add origin highlights and chef notes.</p>
          <button className="buttonSecondary">Add story</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDishes;
