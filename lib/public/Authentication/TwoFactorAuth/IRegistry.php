<?php

declare(strict_types = 1);

/**
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCP\Authentication\TwoFactorAuth;

use OCP\IUser;

/**
 * Nextcloud 2FA provider registry for stateful 2FA providers
 * 
 * This service keeps track of which providers are currently active for a specific
 * user. Stateful 2FA providers (IStatefulProvider) must use this service to save
 * their enabled/disabled state.
 *
 * @since 14.0.0
 */
interface IRegistry {

	/**
	 * Get a key-value map of providers and their enabled/disabled state for
	 * the given user.
	 *
	 * @since 14.0.0
	 * @return string[] where the array key is the provider ID (string) and the
	 *                  value is the enabled state (bool)
	 */
	public function getProviderStates(IUser $user): array;

	/**
	 * Enable the given 2FA provider for the given user
	 *
	 * @since 14.0.0
	 */
	public function enableProviderFor(IProvider $provider, IUser $user);

	/**
	 * Disable the given 2FA provider for the given user
	 *
	 * @since 14.0.0
	 */
	public function disableProviderFor(IProvider $provider, IUser $user);
}
