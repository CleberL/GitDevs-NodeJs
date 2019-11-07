import User from '../models/User';
import axios from 'axios';

class UserController {
  async store(req, res) {
    const { username } = req.params;

    const userExists = await User.findOne({ login: username });

    if (userExists) {
      return res.send(userExists);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const {
      login,
      name,
      avatar_url,
      bio,
      location,
      email,
      html_url: link,
    } = response.data;

    const dev = await User.create({
      login,
      name,
      avatar_url,
      bio,
      location,
      email,
      link,
    });

    return res.json(dev);
  }

  async delete(req, res) {
    const { username } = req.params;

    const result = await User.findOneAndRemove({ login: username });

    return res.json(result);
  }

  async findAll(req, res) {
    const users = await User.find().sort('name');

    return res.json(users);
  }

  async find(req, res) {
    const { username } = req.params;
    console.log(username);

    const userData = await User.findOne({ login: username });

    if (!userData) {
      return res.status(404).json({ error: 'user not exists' });
    }
    console.log(userData);
    return res.json(userData);
  }
}

export default new UserController();
