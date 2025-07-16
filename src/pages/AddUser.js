import AuthGuard from "src/components/Guard/AuthGuard";
import { DEPARTMENTS, ROLE_LEVELS } from "src/utils/constants";

const AddUser = (department_override, role_level_override) => {


    return (
		<AuthGuard requiredDepartment={DEPARTMENTS.any} minRoleLevel={ROLE_LEVELS.admin}>
			<div className="add-user"> 
				<strong>Add User Page.</strong>
				{/* <div className="add-user-form container mt-5" style={{ maxWidth: '400px' }}>
					<h2 className="mb-4 text-center">Dairy Portal Login</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
						<label className="form-label">Username:</label>
						<input
							className="form-control"
							name="username"
							value={formData.credentials.username}
							onChange={handleInputChange}
							required
						/>
						</div>

						<div className="mb-3">
						<label className="form-label">Password:</label>
						<input
							type="password"
							className="form-control"
							name="password"
							value={formData.credentials.password}
							onChange={handleInputChange}
							required
						/>
						</div>

						<div className="form-check mb-3">
						<input
							type="checkbox"
							className="form-check-input"
							id="rememberMe"
							name="rememberMe"
							checked={formData.rememberMe}
							onChange={(e) =>
							setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))
							}
						/>
						<label className="form-check-label" htmlFor="rememberMe">
							Remember Me
						</label>
						</div>

						{error && <div className="alert alert-danger">{error}</div>}

						<button 
						type="submit" 
						className="btn btn-primary w-100"
						disabled={isLoading}
						>
						{isLoading ? 'Logging in...' : 'Login'}
						</button>
					</form>
				</div> */}
			</div>
		</AuthGuard>
)};

export default AddUser;